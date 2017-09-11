/**
 * 映画作品ファクトリー
 * @namespace creativeWork.movie
 */
import * as COA from '@motionpicture/coa-service';
import * as CreativeWorkFactory from '../creativeWork';
/**
 * movie creativeWork interface
 * @export
 * @interface
 * @memberof creativeWork.movie
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    duration: string;
    contentRating: string;
}
/**
 * COAの作品抽出結果からFilmオブジェクトを作成する
 * @export
 * @function
 * @memberof creativeWork.movie
 */
export declare function createFromCOA(filmFromCOA: COA.services.master.ITitleResult): ICreativeWork;
