/**
 * 場所ファクトリー
 * @namespace place
 */

import IMultilingualString from './multilingualString';
import PlaceType from './placeType';

/**
 * 場所インターフェース
 */
export interface IPlace {
    id?: string;
    identifier?: string;
    name?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace;
    containsPlace?: IPlace[];
    maximumAttendeeCapacity?: number;
    // tslint:disable-next-line:no-suspicious-comment
    openingHoursSpecification?: any; // TODO 型定義
    smokingAllowed?: boolean;
    telephone?: string;
    url?: string;
    /**
     * スキーマタイプ
     */
    typeOf: PlaceType;
}

export function create(params: {
    id?: string;
    identifier?: string;
    name?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace;
    containsPlace?: IPlace[];
    maximumAttendeeCapacity?: number;
    // tslint:disable-next-line:no-suspicious-comment
    openingHoursSpecification?: any; // TODO 型定義
    smokingAllowed?: boolean;
    telephone?: string;
    url?: URL;
    typeOf: PlaceType;
}): IPlace {
    return {
        id: params.id,
        identifier: params.identifier,
        name: params.name,
        description: params.description,
        address: params.address,
        branchCode: params.branchCode,
        containedInPlace: params.containedInPlace,
        containsPlace: params.containsPlace,
        maximumAttendeeCapacity: params.maximumAttendeeCapacity,
        openingHoursSpecification: params.openingHoursSpecification,
        smokingAllowed: params.smokingAllowed,
        telephone: params.telephone,
        url: (params.url !== undefined) ? params.url.toString() : undefined,
        typeOf: params.typeOf
    };
}
