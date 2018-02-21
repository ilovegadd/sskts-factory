/**
 * 在庫状況ファクトリー
 * @namespace stockStatus
 */

import StockStatusGroup from './stockStatusGroup';

/**
 * 在庫状況インターフェース
 * 表現は、在庫状況単位によって変わると思われる(基本的に文字列)
 */
export interface IStockStatus {
    /**
     * ID
     */
    id: string;
    /**
     * 在庫状況グループ
     */
    group: StockStatusGroup;
    /**
     * 在庫状況表現
     */
    expression: any;
}
