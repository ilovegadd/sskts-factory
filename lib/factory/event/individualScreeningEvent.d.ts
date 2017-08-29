/**
 * individual screening event factory
 * 個々の上映イベントファクトリー
 * @namespace factory/event/individualScreeningEvent
 */
import * as COA from '@motionpicture/coa-service';
import * as EventFactory from '../event';
import * as ScreeningEventFactory from '../event/screeningEvent';
import IMultilingualString from '../multilingualString';
import * as MovieTheaterPlaceFactory from '../place/movieTheater';
import PlaceType from '../placeType';
/**
 * search conditions interface
 * 個々の上映イベントの検索条件インターフェース
 * @export
 * @interface
 * @memberof factory/event/individualScreeningEvent
 */
export interface ISearchConditions {
    day: string;
    theater: string;
}
/**
 * item availability interface
 * 上映イベント空席状況表現インターフェース
 * 表現を変更する場合、このインターフェースを変更して対応する
 * @export
 * @type
 * @memberof factory/event/individualScreeningEvent
 */
export declare type IItemAvailability = number;
/**
 * 座席数から在庫状況表現を生成する
 *
 * @param {number} numberOfAvailableSeats 空席数
 * @param {number} numberOfAllSeats 全座席数
 * @returns {IItemAvailability} 在庫状況表現
 */
export declare function createItemAvailability(numberOfAvailableSeats: number, numberOfAllSeats: number): IItemAvailability;
/**
 * event offer interface
 * @export
 * @interface
 * @memberof factory/event/individualScreeningEvent
 */
export interface IOffer {
    typeOf: string;
    availability: IItemAvailability | null;
    url: string;
}
/**
 * event with offer interface
 * @export
 * @interface
 * @memberof factory/event/individualScreeningEvent
 */
export declare type IEventWithOffer = IEvent & {
    offer: IOffer;
};
/**
 * individual screening event interface
 * 個々の上映イベントインターフェース(COAのスケジュールに相当)
 * @export
 * @interface
 * @memberof factory/event/individualScreeningEvent
 */
export interface IEvent extends EventFactory.IEvent {
    /**
     * 上映作品
     */
    workPerformed: ScreeningEventFactory.IWorkPerformed;
    /**
     * 上映場所
     */
    location: {
        /**
         * スキーマタイプ
         */
        typeOf: PlaceType;
        /**
         * スクリーンコード
         */
        branchCode: string;
        /**
         * スクリーン名称
         */
        name: IMultilingualString;
    };
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * 開場日時(in ISO 8601 date format)
     */
    doorTime?: Date;
    /**
     * 終了日時(in ISO 8601 date format)
     */
    endDate: Date;
    /**
     * 開始日時(in ISO 8601 date format)
     */
    startDate: Date;
    /**
     * 親イベント
     * COAの劇場作品に相当します。
     */
    superEvent: ScreeningEventFactory.IEvent;
    /**
     * その他COA情報
     */
    coaInfo: {
        theaterCode: string;
        dateJouei: string;
        titleCode: string;
        titleBranchNum: string;
        timeBegin: string;
        screenCode: string;
        /**
         * トレーラー時間
         * トレーラー含む本編以外の時間（分）
         */
        trailerTime: number;
        /**
         * サービス区分
         * 「通常興行」「レイトショー」など
         */
        kbnService?: COA.services.master.IKubunNameResult;
        /**
         * 音響区分
         */
        kbnAcoustic?: COA.services.master.IKubunNameResult;
        /**
         * サービスデイ名称
         * 「映画の日」「レディースデイ」など ※割引区分、割引コード、特定日等の組み合わせで登録するため名称で連携の方が容易
         */
        nameServiceDay: string;
        /**
         * 購入可能枚数
         */
        availableNum: number;
        /**
         * 予約開始日
         * 予約可能になる日付(YYYYMMDD)
         */
        rsvStartDate: string;
        /**
         * 予約終了日
         * 予約終了になる日付(YYYYMMDD)
         */
        rsvEndDate: string;
        /**
         * 先行予約フラグ
         * 先行予約の場合は'1'、それ以外は'0'
         */
        flgEarlyBooking: string;
    };
}
/**
 * create individualScreeningEvent from COA performance
 * @export
 * @function
 * @memberof factory/event/individualScreeningEvent
 */
export declare function createFromCOA(params: {
    performanceFromCOA: COA.services.master.IScheduleResult;
    screenRoom: MovieTheaterPlaceFactory.IScreeningRoom;
    screeningEvent: ScreeningEventFactory.IEvent;
    serviceKubuns: COA.services.master.IKubunNameResult[];
    acousticKubuns: COA.services.master.IKubunNameResult[];
}): IEvent;
/**
 * create id by COA infos.
 * @export
 * @function
 * @memberof factory/event/individualScreeningEvent
 */
export declare function createIdFromCOA(args: {
    screeningEvent: ScreeningEventFactory.IEvent;
    dateJouei: string;
    screenCode: string;
    timeBegin: string;
}): string;
