
export const showTest = (type, ntype) => {
    if (type === "overtime") {
        switch (ntype) {
            case 1:
                return "双休日加班";
            case 2:
                return "节假日加班";
            case 3:
                return "工作日加班";
            default:
                return "加班";
        }
    } else {
        switch (ntype) {
            case 1:
                return "年假";
            case 2:
                return "调休";
            default:
                return "休假";
        }
    }
}

export const showTime = (start, end) => {
    let startNum = new Date(new Date(start).toGMTString()) * 1;
    let endNum = new Date(new Date(end).toGMTString()) * 1;
    let num = (endNum - startNum) / 1000;
    let day = (num / 60 / 60 / 24).toFixed(1);
    return day;
}