import Path from '~/components/Path';
import styles from './SearchPage.module.scss';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { searchService } from '~/Service/searchService';
import Search from '~/components/Slide/Search/Search';
import ProductItem from '~/components/ListProduct/ProductItem';
import { DownIcon, KitIcon } from '~/assets/icon';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import { useDispatch, useSelector } from 'react-redux';
import QueryPriceItem from './QueryPriceItem';
import QueryBranchItem from './QueryBranchItem';
import { clearQuery } from '~/redux/actions';
import { listBranch, listPrice } from '~/config/ListUtil';
import SkeletonItem from '../../components/ListProduct/SkeletonItem';

const cx = classNames.bind(styles);

function SearchPage() {
    const urlParams = new URL(window.location.href).searchParams;
    const value = urlParams.get('value');
    const listBranchChecked = useSelector((state) => state.listBranchChecked);
    const listPriceChecked = useSelector((state) => state.listPriceChecked);
    const dispatch = useDispatch();
    const [searchValue, setSearhValue] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentOption, setCurrentOption] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [total, setTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const fetchAPi = async () => {
            const { products, pageCount, total } = await searchService(
                `search/query?value=${value}&field=name&limit=10&page=${currentPage}&sort=${currentOption}`,
                {
                    params: {
                        listBranch: listBranchChecked,
                        distancePrice: listPriceChecked,
                    },
                },
            );
            setSearhValue(products);
            setPageCount(pageCount);
            setIsLoading(false);
            setTotal(total);
            if (products?.length <= 0) {
                setCurrentPage(1);
            }
        };
        fetchAPi();
    }, [value, currentPage, listBranchChecked, currentOption, listPriceChecked]);
    //
    useEffect(() => {
        dispatch(clearQuery());
    }, [value, dispatch]);

    const handlePageClick = (data) => {
        setCurrentPage(() => data.selected + 1);
    };
    useEffect(() => {
        window.scroll({
            top: 0,
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="path">
                <Path pathList={['Kết quả tìm kiếm']} />
            </div>

            <div className="list__result">
                {value !== 'all' ? (
                    total !== 0 && (
                        <div className={cx('number__result')}>
                            Tìm thấy được <span>{total}</span> kết quả với từ khóa <span>"{value}"</span>
                        </div>
                    )
                ) : (
                    <div className={cx('number__result')}>
                        <span>Tất cả sản phẩm</span>
                    </div>
                )}

                <div className={cx('result')}>
                    <div className={cx('filter')}>
                        <h3>
                            <KitIcon /> Bộ lộc tìm kiếm
                        </h3>
                        <div className={cx('form-group')}>
                            <div className={cx('header')}>Theo thường hiệu</div>
                            {listBranch.map((value, index) => (
                                <QueryBranchItem key={index} value={value} />
                            ))}
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('header')}>Theo danh mục</div>
                            {listPrice.map((item, index) => {
                                const key = Object.keys(item)[0];
                                return <QueryPriceItem key={index} name={key} price={item[key]} />;
                            })}
                        </div>
                    </div>

                    {!isLoading ? (
                        searchValue?.length > 0 ? (
                            <div className={cx('list-search')}>
                                <div className={cx('function')}>
                                    <div className={cx('arrangment')}> Sắp xếp theo:</div>
                                    <Tippy
                                        interactive={true}
                                        offset={[-90, -35]}
                                        hideOnClick={true}
                                        render={(attrs) => (
                                            <div className={cx('option')}>
                                                <PopperWrapper>
                                                    <div
                                                        className={cx('option-item')}
                                                        onClick={() => setCurrentOption(0)}
                                                    >
                                                        Giá
                                                    </div>
                                                    <div
                                                        className={cx('option-item')}
                                                        onClick={() => setCurrentOption(1)}
                                                    >
                                                        Giá thấp đến cao
                                                    </div>
                                                    <div
                                                        className={cx('option-item')}
                                                        onClick={() => setCurrentOption(-1)}
                                                    >
                                                        Giá cao đến thấp
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('selection')}>
                                            {currentOption === 1
                                                ? 'Giá từ thấp đến cao'
                                                : currentOption === -1
                                                ? 'Giá từ cao đến thấp'
                                                : 'Giá'}
                                            <DownIcon />
                                        </div>
                                    </Tippy>
                                </div>

                                {searchValue.map((pro) => {
                                    return (
                                        <ProductItem
                                            key={pro._id}
                                            MainPhotoURL={pro.MainPhotoURL}
                                            Sub1PhotoURL={pro.Sub1PhotoURL}
                                            prices={pro.prices}
                                            salePercent={pro.salePercent}
                                            sold={pro.sold}
                                            name={pro.name}
                                            store={pro.store}
                                            branch={pro.branch}
                                            slug={pro.slug}
                                            _id={pro._id}
                                            custom={true}
                                        />
                                    );
                                })}
                            </div>
                        ) : listBranchChecked.length > 0 || listPriceChecked.length > 0 ? (
                            // hiện icon quay
                            <div className={cx('none__product')}>
                                <div className={cx('no-result')}> Không tìm thấy kết quả nào với danh mục này</div>
                            </div>
                        ) : (
                            <div className={cx('none__product')}>
                                Không tìm thấy kết quả nào với từ khóa <span>"{value}"</span>
                                <p>Vui lòng tìm kiếm với từ khóa khác</p>
                                <Search custom="search2" />
                            </div>
                        )
                    ) : (
                        <div className={cx('list-search')}>
                            <SkeletonItem />
                        </div>
                    )}
                </div>
            </div>

            {pageCount > 1 && (
                <ReactPaginate
                    className={cx('paginate')}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    activeClassName={cx('active')}
                />
            )}
        </div>
    );
}

export default SearchPage;
