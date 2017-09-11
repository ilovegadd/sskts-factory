"use strict";
/**
 * screen event factory
 * 劇場の上映イベントファクトリー
 * @namespace event.screeningEvent
 */
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const creativeWorkType_1 = require("../creativeWorkType");
const eventStatusType_1 = require("../eventStatusType");
const eventType_1 = require("../eventType");
/**
 * COAの作品抽出結果からFilmオブジェクトを作成する
 * @export
 * @function
 * @memberof event.screeningEvent
 */
function createFromCOA(params) {
    const endDate = (moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;
    const startDate = (moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;
    return {
        // title_codeは劇場をまたいで共有、title_branch_numは劇場毎に管理
        identifier: createIdentifier(params.movieTheater.branchCode, params.filmFromCOA.titleCode, params.filmFromCOA.titleBranchNum),
        name: {
            ja: params.filmFromCOA.titleName,
            en: params.filmFromCOA.titleNameEng
        },
        kanaName: params.filmFromCOA.titleNameKana,
        alternativeHeadline: params.filmFromCOA.titleNameShort,
        location: {
            branchCode: params.movieTheater.branchCode,
            name: params.movieTheater.name,
            kanaName: params.movieTheater.kanaName,
            typeOf: params.movieTheater.typeOf
        },
        organizer: {
            typeOf: params.movieTheater.typeOf,
            identifier: params.movieTheater.identifier,
            name: params.movieTheater.name
        },
        videoFormat: params.eizouKubuns.find((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEizou),
        workPerformed: {
            identifier: params.filmFromCOA.titleCode,
            name: params.filmFromCOA.titleNameOrig,
            duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
            contentRating: params.eirinKubuns.find((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEirin),
            typeOf: creativeWorkType_1.default.Movie
        },
        duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
        endDate: endDate,
        startDate: startDate,
        coaInfo: {
            titleBranchNum: params.filmFromCOA.titleBranchNum,
            kbnJoueihousiki: params.joueihousikiKubuns.find((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJoueihousiki),
            kbnJimakufukikae: params.jimakufukikaeKubuns.find((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJimakufukikae),
            flgMvtkUse: params.filmFromCOA.flgMvtkUse,
            dateMvtkBegin: params.filmFromCOA.dateMvtkBegin
        },
        eventStatus: eventStatusType_1.default.EventScheduled,
        typeOf: eventType_1.default.ScreeningEvent
    };
}
exports.createFromCOA = createFromCOA;
function createIdentifier(theaterCode, titleCode, titleBranchNum) {
    return `${theaterCode}${titleCode}${titleBranchNum}`;
}
exports.createIdentifier = createIdentifier;
