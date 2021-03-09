export class BlocCommon {
    static livecastUrlBuild(url: string) {
        return url.replace('http://livecast.yangqungongshe.com', 'https://church.yangqungongshe.com/livecast');
    }



    /**
 * 创建blob对象，并利用浏览器打开url进行下载
 * @param data 文件流数据
 */
    static downloadFile(data) {
        // 下载类型 xls
        const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        // 下载类型：csv
        const contentType2 = 'text/csv';
        const blob = new Blob([data], { type: contentType });
        const url = window.URL.createObjectURL(blob);
        // 打开新窗口方式进行下载
        // window.open(url); 

        // 以动态创建a标签进行下载
        const a = document.createElement('a');
        const fileName = '教会负责人导出';
        a.href = url;
        // a.download = fileName;
        a.download = fileName + '.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
