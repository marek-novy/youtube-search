export interface IGenericAction<T, P> {
    type: T;
    payload?: P;
    error?: boolean;
}

export interface IAction<T, P> extends IGenericAction<T, P> {}
// xport interface IErrorAction<M> extends IGenericAction<IError, M> {}
export interface IAnyAction extends IGenericAction<string, any> {}
