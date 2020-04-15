import { BaseAction } from "../framework/Store";

type Direction = "north" | "east" | "south" | "west"
export interface StartGame extends BaseAction<"START_GAME"> {
    emit: false;
    nickname: string;
}
export interface Attack extends BaseAction<"ATTACK"> {
    emit: false;
    payload: {
        damage: number;
        direction: Direction;
    }
}
export interface Move extends BaseAction<"MOVE"> {
    type: "MOVE",
    emit: true,
}
export type Action = Attack | StartGame | Move;

const attack = (damage: number, direction: Direction): Attack => {
    return {
        type: "ATTACK",
        emit: false,
        payload: {
            damage,
            direction
        }
    };
};

// export type ThunkAction<RequestType, ResultType, ErrorType, Request, Response> =
//   | (BaseAction<RequestType> & { request: Request })
//   | (BaseAction<ResultType> & { request: Request } & { response: Response})
//   | (BaseAction<ErrorType>   & { request: Request } & { error: string});

// export const asRequest = <RequestType extends BaseAction<RequestType>>(type: RequestType) => <Request>(
//     request: Request,
// ) => ({
//         type,
//         request,
//     });

// export const asResult = <ResponseType extends BaseAction<ResponseType>>(type: ResponseType) => <Request, Result>(
//     request: Request,
//     response: Result,
// ) => ({ type, request, response });

// export const asError = <ErrorType extends BaseAction<ErrorType>>(type: ErrorType) => <Request>(
//     request: Request,
//     error: string,
// ) => ({ type, request, error });

// type Dispatch<Action> = (a: Action) => Action;
// type Resolve<Request, Response> = (request: Request) => Promise<Response>
// type ReqCreator<Action, Request> = (req: Request) => Action;
// type ResCreator<Action, Request, Response> = (req: Request, res: Response) => Action;
// type ErrCreator<Action, Request> = (req: Request, err: string) => Action;

// export const dispatcher = <Request, Response>(fn: Resolve<Request, Response>) => {
//     return <A extends BaseAction<A["type"]>>(
//         req: ReqCreator<A, Request>,
//         res: ResCreator<A, Request, Response>,
//         err: ErrCreator<A, Request>
//     ) => {
//         return (request: Request) => (dispatch: Dispatch<A>) => {
//             dispatch(req(request));
//             fn(request)
//                 .then(response => dispatch(res(request, response)))
//                 .catch(e => dispatch(err(request, e.message)));
//         };
//     };
// };

// export type MoveReq = {
//     direction: "north" | "east" | "south" | "west",
// }
// export type MoveRes = {}
// export type Move = ThunkAction<
//     "MOVE_REQUEST",
//     "MOVE_SUCCESS",
//     "MOVE_ERROR",
//     MoveReq,
//     MoveRes
// >;

// export const moveEmit = async (req: MoveReq): Promise<MoveRes> => {
//     // api call
//     return new Promise(resolve => {
//         req.direction;
//         setTimeout(resolve, 1000);
//     });
// };

// export const move = dispatcher(moveEmit)<Move>(
//     asRequest("MOVE_REQUEST"),
//     asResult("MOVE_SUCCESS"),
//     asError("MOVE_ERROR"),
// );

// export type AttackReq = {
//     direction: "north" | "east" | "south" | "west",
// }
// export type AttackRes = {}
// export type Attack = ThunkAction<
//     "ATTACK_REQUEST",
//     "ATTACK_SUCCESS",
//     "ATTACK_ERROR",
//     MoveReq,
//     MoveRes
// >;

// export const attackEmit = async (req: AttackReq): Promise<AttackRes> => {
//     return new Promise(resolve => {
//         req.direction;
//         setTimeout(resolve, 1000);
//     });
// };

// export type Action = Move | Attack;

// export const attack = dispatcher(attackEmit)<Attack>(
//     asRequest("ATTACK_REQUEST"),
//     asResult("ATTACK_SUCCESS"),
//     asError("ATTACK_ERROR"),
// );
