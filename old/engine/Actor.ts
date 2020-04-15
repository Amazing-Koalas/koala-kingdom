import { Component, BaseComponent } from "./Component";
import { Action } from "./State";

export class Actor<State, Dispatch> extends BaseComponent<State, _Event extends Action> {
}