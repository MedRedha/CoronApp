import RestClient from './RestClient';
import UrlList from './UrlList';

const ApiManager = {
    Corona: {
        readBrief: (callback) => {
            RestClient.sendGetRequest(UrlList.Corona.getBriefUrl(), callback);
        },

        readLatest: (callback) => {
            RestClient.sendGetRequest(UrlList.Corona.getLatestUrl(), callback);
        },

        readTimeseries: (callback) => {
            RestClient.sendGetRequest(
                UrlList.Corona.getTimeseriesUrl(),
                callback
            );
        },
    },
};

export default ApiManager;
