/**
 * 組織ファクトリー
 * @namespace organization
 */
import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import * as URLFactory from './url';
/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier: string;
    name: IMultilingualString;
    legalName: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
}
export declare function create(params: {
    id?: string;
    identifier: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
}): IOrganization;
