/// <reference types="node" />
import { Server } from 'http';
declare type icallback = (pathName: string) => void;
declare function start(callback: icallback): Server;
export default start;
