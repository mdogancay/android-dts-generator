/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class LayoutInflaterCompatBase {
				}
				export module LayoutInflaterCompatBase {
					export class FactoryWrapper {
						public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
						public toString(): string;
					}
				}
			}
		}
	}
}