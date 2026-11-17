import test from "node:test";
import assert from "node:assert/strict";
import {formatResult} from "../src/qr-utils.js";
test("formats a decoded payload",()=>assert.equal(formatResult({data:"hello",version:2}).text,"hello"));
test("returns a useful empty state",()=>assert.match(formatResult(null).text,/No QR code/));
