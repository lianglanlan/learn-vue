//工具类函数抽取
export function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length))
    }

    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`${k}`).test(fmt)) {
            fmt = fmt.replace(new RegExp(`${k}`), match => {
                let str = o[k] + ''
                if (match.length !== 1) {
                    str = str.padStart(match.length, '0')
                }
                return str
            })
        }
    }
    return fmt
}