/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TodoDto } from '../models/TodoDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TodosService {

    /**
     * @returns TodoDto Found todo
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<TodoDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todos',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static add(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/todos',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static findOne(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static edit(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/todos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static remove(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/todos/{id}',
            path: {
                'id': id,
            },
        });
    }

}
