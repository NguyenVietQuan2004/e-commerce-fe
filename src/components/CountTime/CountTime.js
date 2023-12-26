import styles from './CountTime.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { ClockIcon } from '~/assets/icon';

const cx = classNames.bind(styles);
function formatTimeUnit(unit) {
    return String(unit).padStart(2, '0');
}

function CountTime() {
    const [timeTarget, setTimeTarget] = useState({
        year: 2024,
        month: 1,
        day: 1,
    });
    const [getTime, setGetTime] = useState({});
    const targetDate = new Date(
        `${timeTarget.year}-${formatTimeUnit(timeTarget.month)}-${formatTimeUnit(timeTarget.day)}T23:59:59`,
    ).getTime();
    const updateTime = useCallback(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining < 0) {
            if (timeTarget.month === 12) {
                setTimeTarget((pre) => {
                    return {
                        year: pre.year + 1,
                        month: 1,
                        day: 1,
                    };
                });
            } else {
                setTimeTarget((pre) => {
                    return {
                        ...pre,
                        month: pre.month + 1,
                        day: pre.month + 1,
                    };
                });
            }
        }
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }, [timeTarget, targetDate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setGetTime(updateTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div className={cx('wrapper')}>
            <ClockIcon />
            <div className={cx('time')}>{formatTimeUnit(getTime.days)} </div>
            <div> Ngày </div>
            <div className={cx('block')}>:</div>
            <div className={cx('time')}> {formatTimeUnit(getTime.hours)} </div>
            <div> Giờ </div>
            <div className={cx('block')}>:</div>
            <div className={cx('time')}> {formatTimeUnit(getTime.minutes)} </div>
            <div> Phút </div>
            <div className={cx('block')}>:</div>
            <div className={cx('time')}> {formatTimeUnit(getTime.seconds)} </div>
            <div> Giây</div>
        </div>
    );
}

export default CountTime;
