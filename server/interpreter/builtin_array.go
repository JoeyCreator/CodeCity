/* Copyright 2017 Google Inc.
 * https://github.com/NeilFraser/CodeCity
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package interpreter

import (
	"encoding/json"

	"codecity.world/cc/server/interpreter/ast"
	"codecity.world/cc/server/interpreter/data"
)

func (intrp *Interpreter) initBuiltinArray() {
	// FIXME: should be a Function (not just child of Function.prototype)
	intrp.mkBuiltin("Array", data.NewObject(nil, intrp.protos.FunctionProto))
	intrp.mkBuiltin("Array.prototype", intrp.protos.ArrayProto)

	var params []*ast.Identifier
	var body *ast.BlockStatement

	e := json.Unmarshal([]byte(pushPolyfillParams), &params)
	if e != nil {
		panic(e)
	}
	e = json.Unmarshal([]byte(pushPolyfill), &body)
	if e != nil {
		panic(e)
	}
	// FIXME: set owner:
	var push = newClosure(nil, intrp.protos.FunctionProto, intrp.global, params, body)

	intrp.mkBuiltin("Array.prototype.push", push)
}

const pushPolyfillParams = `[{"type":"Identifier","start":32,"end":33,"name":"e"}]`

const pushPolyfill = `{"type":"BlockStatement","start":35,"end":85,"body":[{"type":"ExpressionStatement","start":39,"end":60,"expression":{"type":"AssignmentExpression","start":39,"end":60,"operator":"=","left":{"type":"MemberExpression","start":39,"end":56,"object":{"type":"ThisExpression","start":39,"end":43},"property":{"type":"MemberExpression","start":44,"end":55,"object":{"type":"ThisExpression","start":44,"end":48},"property":{"type":"Identifier","start":49,"end":55,"name":"length"},"computed":false},"computed":true},"right":{"type":"Identifier","start":59,"end":60,"name":"e"}}},{"type":"ReturnStatement","start":63,"end":81,"argument":{"type":"MemberExpression","start":70,"end":81,"object":{"type":"ThisExpression","start":70,"end":74},"property":{"type":"Identifier","start":75,"end":81,"name":"length"},"computed":false}}]}`
