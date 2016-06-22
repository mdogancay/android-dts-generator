/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.KeyCharacterMap.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export class KeyEvent {
			public constructor();
			public constructor(param0: number, param1: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
			public constructor(param0: number, param1: string, param2: number, param3: number);
			public constructor(param0: android.view.KeyEvent);
			public constructor(param0: android.view.KeyEvent, param1: number, param2: number);
			public static getMaxKeyCode(): number;
			public static getDeadChar(param0: number, param1: number): number;
			public static changeTimeRepeat(param0: android.view.KeyEvent, param1: number, param2: number): android.view.KeyEvent;
			public static changeTimeRepeat(param0: android.view.KeyEvent, param1: number, param2: number, param3: number): android.view.KeyEvent;
			public static changeAction(param0: android.view.KeyEvent, param1: number): android.view.KeyEvent;
			public static changeFlags(param0: android.view.KeyEvent, param1: number): android.view.KeyEvent;
			public isSystem(): boolean;
			public static isGamepadButton(param0: number): boolean;
			public getDeviceId(): number;
			public getSource(): number;
			public setSource(param0: number): void;
			public getMetaState(): number;
			public getModifiers(): number;
			public getFlags(): number;
			public static getModifierMetaStateMask(): number;
			public static isModifierKey(param0: number): boolean;
			public static normalizeMetaState(param0: number): number;
			public static metaStateHasNoModifiers(param0: number): boolean;
			public static metaStateHasModifiers(param0: number, param1: number): boolean;
			public hasNoModifiers(): boolean;
			public hasModifiers(param0: number): boolean;
			public isAltPressed(): boolean;
			public isShiftPressed(): boolean;
			public isSymPressed(): boolean;
			public isCtrlPressed(): boolean;
			public isMetaPressed(): boolean;
			public isFunctionPressed(): boolean;
			public isCapsLockOn(): boolean;
			public isNumLockOn(): boolean;
			public isScrollLockOn(): boolean;
			public getAction(): number;
			public isCanceled(): boolean;
			public startTracking(): void;
			public isTracking(): boolean;
			public isLongPress(): boolean;
			public getKeyCode(): number;
			public getCharacters(): string;
			public getScanCode(): number;
			public getRepeatCount(): number;
			public getDownTime(): number;
			public getEventTime(): number;
			public getKeyCharacterMap(): android.view.KeyCharacterMap;
			public getDisplayLabel(): string;
			public getUnicodeChar(): number;
			public getUnicodeChar(param0: number): number;
			public getKeyData(param0: android.view.KeyCharacterMap.KeyData): boolean;
			public getMatch(param0: native.Array<string>): string;
			public getMatch(param0: native.Array<string>, param1: number): string;
			public getNumber(): string;
			public isPrintingKey(): boolean;
			public dispatch(param0: android.view.KeyEvent.Callback): boolean;
			public dispatch(param0: android.view.KeyEvent.Callback, param1: android.view.KeyEvent.DispatcherState, param2: java.lang.Object): boolean;
			public toString(): string;
			public static keyCodeToString(param0: number): string;
			public static keyCodeFromString(param0: string): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static ACTION_DOWN: number;
			public static ACTION_MULTIPLE: number;
			public static ACTION_UP: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static FLAG_CANCELED: number;
			public static FLAG_CANCELED_LONG_PRESS: number;
			public static FLAG_EDITOR_ACTION: number;
			public static FLAG_FALLBACK: number;
			public static FLAG_FROM_SYSTEM: number;
			public static FLAG_KEEP_TOUCH_MODE: number;
			public static FLAG_LONG_PRESS: number;
			public static FLAG_SOFT_KEYBOARD: number;
			public static FLAG_TRACKING: number;
			public static FLAG_VIRTUAL_HARD_KEY: number;
			public static FLAG_WOKE_HERE: number;
			public static KEYCODE_0: number;
			public static KEYCODE_1: number;
			public static KEYCODE_11: number;
			public static KEYCODE_12: number;
			public static KEYCODE_2: number;
			public static KEYCODE_3: number;
			public static KEYCODE_3D_MODE: number;
			public static KEYCODE_4: number;
			public static KEYCODE_5: number;
			public static KEYCODE_6: number;
			public static KEYCODE_7: number;
			public static KEYCODE_8: number;
			public static KEYCODE_9: number;
			public static KEYCODE_A: number;
			public static KEYCODE_ALT_LEFT: number;
			public static KEYCODE_ALT_RIGHT: number;
			public static KEYCODE_APOSTROPHE: number;
			public static KEYCODE_APP_SWITCH: number;
			public static KEYCODE_ASSIST: number;
			public static KEYCODE_AT: number;
			public static KEYCODE_AVR_INPUT: number;
			public static KEYCODE_AVR_POWER: number;
			public static KEYCODE_B: number;
			public static KEYCODE_BACK: number;
			public static KEYCODE_BACKSLASH: number;
			public static KEYCODE_BOOKMARK: number;
			public static KEYCODE_BREAK: number;
			public static KEYCODE_BRIGHTNESS_DOWN: number;
			public static KEYCODE_BRIGHTNESS_UP: number;
			public static KEYCODE_BUTTON_1: number;
			public static KEYCODE_BUTTON_10: number;
			public static KEYCODE_BUTTON_11: number;
			public static KEYCODE_BUTTON_12: number;
			public static KEYCODE_BUTTON_13: number;
			public static KEYCODE_BUTTON_14: number;
			public static KEYCODE_BUTTON_15: number;
			public static KEYCODE_BUTTON_16: number;
			public static KEYCODE_BUTTON_2: number;
			public static KEYCODE_BUTTON_3: number;
			public static KEYCODE_BUTTON_4: number;
			public static KEYCODE_BUTTON_5: number;
			public static KEYCODE_BUTTON_6: number;
			public static KEYCODE_BUTTON_7: number;
			public static KEYCODE_BUTTON_8: number;
			public static KEYCODE_BUTTON_9: number;
			public static KEYCODE_BUTTON_A: number;
			public static KEYCODE_BUTTON_B: number;
			public static KEYCODE_BUTTON_C: number;
			public static KEYCODE_BUTTON_L1: number;
			public static KEYCODE_BUTTON_L2: number;
			public static KEYCODE_BUTTON_MODE: number;
			public static KEYCODE_BUTTON_R1: number;
			public static KEYCODE_BUTTON_R2: number;
			public static KEYCODE_BUTTON_SELECT: number;
			public static KEYCODE_BUTTON_START: number;
			public static KEYCODE_BUTTON_THUMBL: number;
			public static KEYCODE_BUTTON_THUMBR: number;
			public static KEYCODE_BUTTON_X: number;
			public static KEYCODE_BUTTON_Y: number;
			public static KEYCODE_BUTTON_Z: number;
			public static KEYCODE_C: number;
			public static KEYCODE_CALCULATOR: number;
			public static KEYCODE_CALENDAR: number;
			public static KEYCODE_CALL: number;
			public static KEYCODE_CAMERA: number;
			public static KEYCODE_CAPS_LOCK: number;
			public static KEYCODE_CAPTIONS: number;
			public static KEYCODE_CHANNEL_DOWN: number;
			public static KEYCODE_CHANNEL_UP: number;
			public static KEYCODE_CLEAR: number;
			public static KEYCODE_COMMA: number;
			public static KEYCODE_CONTACTS: number;
			public static KEYCODE_CTRL_LEFT: number;
			public static KEYCODE_CTRL_RIGHT: number;
			public static KEYCODE_D: number;
			public static KEYCODE_DEL: number;
			public static KEYCODE_DPAD_CENTER: number;
			public static KEYCODE_DPAD_DOWN: number;
			public static KEYCODE_DPAD_LEFT: number;
			public static KEYCODE_DPAD_RIGHT: number;
			public static KEYCODE_DPAD_UP: number;
			public static KEYCODE_DVR: number;
			public static KEYCODE_E: number;
			public static KEYCODE_EISU: number;
			public static KEYCODE_ENDCALL: number;
			public static KEYCODE_ENTER: number;
			public static KEYCODE_ENVELOPE: number;
			public static KEYCODE_EQUALS: number;
			public static KEYCODE_ESCAPE: number;
			public static KEYCODE_EXPLORER: number;
			public static KEYCODE_F: number;
			public static KEYCODE_F1: number;
			public static KEYCODE_F10: number;
			public static KEYCODE_F11: number;
			public static KEYCODE_F12: number;
			public static KEYCODE_F2: number;
			public static KEYCODE_F3: number;
			public static KEYCODE_F4: number;
			public static KEYCODE_F5: number;
			public static KEYCODE_F6: number;
			public static KEYCODE_F7: number;
			public static KEYCODE_F8: number;
			public static KEYCODE_F9: number;
			public static KEYCODE_FOCUS: number;
			public static KEYCODE_FORWARD: number;
			public static KEYCODE_FORWARD_DEL: number;
			public static KEYCODE_FUNCTION: number;
			public static KEYCODE_G: number;
			public static KEYCODE_GRAVE: number;
			public static KEYCODE_GUIDE: number;
			public static KEYCODE_H: number;
			public static KEYCODE_HEADSETHOOK: number;
			public static KEYCODE_HELP: number;
			public static KEYCODE_HENKAN: number;
			public static KEYCODE_HOME: number;
			public static KEYCODE_I: number;
			public static KEYCODE_INFO: number;
			public static KEYCODE_INSERT: number;
			public static KEYCODE_J: number;
			public static KEYCODE_K: number;
			public static KEYCODE_KANA: number;
			public static KEYCODE_KATAKANA_HIRAGANA: number;
			public static KEYCODE_L: number;
			public static KEYCODE_LANGUAGE_SWITCH: number;
			public static KEYCODE_LAST_CHANNEL: number;
			public static KEYCODE_LEFT_BRACKET: number;
			public static KEYCODE_M: number;
			public static KEYCODE_MANNER_MODE: number;
			public static KEYCODE_MEDIA_AUDIO_TRACK: number;
			public static KEYCODE_MEDIA_CLOSE: number;
			public static KEYCODE_MEDIA_EJECT: number;
			public static KEYCODE_MEDIA_FAST_FORWARD: number;
			public static KEYCODE_MEDIA_NEXT: number;
			public static KEYCODE_MEDIA_PAUSE: number;
			public static KEYCODE_MEDIA_PLAY: number;
			public static KEYCODE_MEDIA_PLAY_PAUSE: number;
			public static KEYCODE_MEDIA_PREVIOUS: number;
			public static KEYCODE_MEDIA_RECORD: number;
			public static KEYCODE_MEDIA_REWIND: number;
			public static KEYCODE_MEDIA_SKIP_BACKWARD: number;
			public static KEYCODE_MEDIA_SKIP_FORWARD: number;
			public static KEYCODE_MEDIA_STEP_BACKWARD: number;
			public static KEYCODE_MEDIA_STEP_FORWARD: number;
			public static KEYCODE_MEDIA_STOP: number;
			public static KEYCODE_MEDIA_TOP_MENU: number;
			public static KEYCODE_MENU: number;
			public static KEYCODE_META_LEFT: number;
			public static KEYCODE_META_RIGHT: number;
			public static KEYCODE_MINUS: number;
			public static KEYCODE_MOVE_END: number;
			public static KEYCODE_MOVE_HOME: number;
			public static KEYCODE_MUHENKAN: number;
			public static KEYCODE_MUSIC: number;
			public static KEYCODE_MUTE: number;
			public static KEYCODE_N: number;
			public static KEYCODE_NAVIGATE_IN: number;
			public static KEYCODE_NAVIGATE_NEXT: number;
			public static KEYCODE_NAVIGATE_OUT: number;
			public static KEYCODE_NAVIGATE_PREVIOUS: number;
			public static KEYCODE_NOTIFICATION: number;
			public static KEYCODE_NUM: number;
			public static KEYCODE_NUMPAD_0: number;
			public static KEYCODE_NUMPAD_1: number;
			public static KEYCODE_NUMPAD_2: number;
			public static KEYCODE_NUMPAD_3: number;
			public static KEYCODE_NUMPAD_4: number;
			public static KEYCODE_NUMPAD_5: number;
			public static KEYCODE_NUMPAD_6: number;
			public static KEYCODE_NUMPAD_7: number;
			public static KEYCODE_NUMPAD_8: number;
			public static KEYCODE_NUMPAD_9: number;
			public static KEYCODE_NUMPAD_ADD: number;
			public static KEYCODE_NUMPAD_COMMA: number;
			public static KEYCODE_NUMPAD_DIVIDE: number;
			public static KEYCODE_NUMPAD_DOT: number;
			public static KEYCODE_NUMPAD_ENTER: number;
			public static KEYCODE_NUMPAD_EQUALS: number;
			public static KEYCODE_NUMPAD_LEFT_PAREN: number;
			public static KEYCODE_NUMPAD_MULTIPLY: number;
			public static KEYCODE_NUMPAD_RIGHT_PAREN: number;
			public static KEYCODE_NUMPAD_SUBTRACT: number;
			public static KEYCODE_NUM_LOCK: number;
			public static KEYCODE_O: number;
			public static KEYCODE_P: number;
			public static KEYCODE_PAGE_DOWN: number;
			public static KEYCODE_PAGE_UP: number;
			public static KEYCODE_PAIRING: number;
			public static KEYCODE_PERIOD: number;
			public static KEYCODE_PICTSYMBOLS: number;
			public static KEYCODE_PLUS: number;
			public static KEYCODE_POUND: number;
			public static KEYCODE_POWER: number;
			public static KEYCODE_PROG_BLUE: number;
			public static KEYCODE_PROG_GREEN: number;
			public static KEYCODE_PROG_RED: number;
			public static KEYCODE_PROG_YELLOW: number;
			public static KEYCODE_Q: number;
			public static KEYCODE_R: number;
			public static KEYCODE_RIGHT_BRACKET: number;
			public static KEYCODE_RO: number;
			public static KEYCODE_S: number;
			public static KEYCODE_SCROLL_LOCK: number;
			public static KEYCODE_SEARCH: number;
			public static KEYCODE_SEMICOLON: number;
			public static KEYCODE_SETTINGS: number;
			public static KEYCODE_SHIFT_LEFT: number;
			public static KEYCODE_SHIFT_RIGHT: number;
			public static KEYCODE_SLASH: number;
			public static KEYCODE_SLEEP: number;
			public static KEYCODE_SOFT_LEFT: number;
			public static KEYCODE_SOFT_RIGHT: number;
			public static KEYCODE_SPACE: number;
			public static KEYCODE_STAR: number;
			public static KEYCODE_STB_INPUT: number;
			public static KEYCODE_STB_POWER: number;
			public static KEYCODE_SWITCH_CHARSET: number;
			public static KEYCODE_SYM: number;
			public static KEYCODE_SYSRQ: number;
			public static KEYCODE_T: number;
			public static KEYCODE_TAB: number;
			public static KEYCODE_TV: number;
			public static KEYCODE_TV_ANTENNA_CABLE: number;
			public static KEYCODE_TV_AUDIO_DESCRIPTION: number;
			public static KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN: number;
			public static KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP: number;
			public static KEYCODE_TV_CONTENTS_MENU: number;
			public static KEYCODE_TV_DATA_SERVICE: number;
			public static KEYCODE_TV_INPUT: number;
			public static KEYCODE_TV_INPUT_COMPONENT_1: number;
			public static KEYCODE_TV_INPUT_COMPONENT_2: number;
			public static KEYCODE_TV_INPUT_COMPOSITE_1: number;
			public static KEYCODE_TV_INPUT_COMPOSITE_2: number;
			public static KEYCODE_TV_INPUT_HDMI_1: number;
			public static KEYCODE_TV_INPUT_HDMI_2: number;
			public static KEYCODE_TV_INPUT_HDMI_3: number;
			public static KEYCODE_TV_INPUT_HDMI_4: number;
			public static KEYCODE_TV_INPUT_VGA_1: number;
			public static KEYCODE_TV_MEDIA_CONTEXT_MENU: number;
			public static KEYCODE_TV_NETWORK: number;
			public static KEYCODE_TV_NUMBER_ENTRY: number;
			public static KEYCODE_TV_POWER: number;
			public static KEYCODE_TV_RADIO_SERVICE: number;
			public static KEYCODE_TV_SATELLITE: number;
			public static KEYCODE_TV_SATELLITE_BS: number;
			public static KEYCODE_TV_SATELLITE_CS: number;
			public static KEYCODE_TV_SATELLITE_SERVICE: number;
			public static KEYCODE_TV_TELETEXT: number;
			public static KEYCODE_TV_TERRESTRIAL_ANALOG: number;
			public static KEYCODE_TV_TERRESTRIAL_DIGITAL: number;
			public static KEYCODE_TV_TIMER_PROGRAMMING: number;
			public static KEYCODE_TV_ZOOM_MODE: number;
			public static KEYCODE_U: number;
			public static KEYCODE_UNKNOWN: number;
			public static KEYCODE_V: number;
			public static KEYCODE_VOICE_ASSIST: number;
			public static KEYCODE_VOLUME_DOWN: number;
			public static KEYCODE_VOLUME_MUTE: number;
			public static KEYCODE_VOLUME_UP: number;
			public static KEYCODE_W: number;
			public static KEYCODE_WAKEUP: number;
			public static KEYCODE_WINDOW: number;
			public static KEYCODE_X: number;
			public static KEYCODE_Y: number;
			public static KEYCODE_YEN: number;
			public static KEYCODE_Z: number;
			public static KEYCODE_ZENKAKU_HANKAKU: number;
			public static KEYCODE_ZOOM_IN: number;
			public static KEYCODE_ZOOM_OUT: number;
			public static MAX_KEYCODE: number;
			public static META_ALT_LEFT_ON: number;
			public static META_ALT_MASK: number;
			public static META_ALT_ON: number;
			public static META_ALT_RIGHT_ON: number;
			public static META_CAPS_LOCK_ON: number;
			public static META_CTRL_LEFT_ON: number;
			public static META_CTRL_MASK: number;
			public static META_CTRL_ON: number;
			public static META_CTRL_RIGHT_ON: number;
			public static META_FUNCTION_ON: number;
			public static META_META_LEFT_ON: number;
			public static META_META_MASK: number;
			public static META_META_ON: number;
			public static META_META_RIGHT_ON: number;
			public static META_NUM_LOCK_ON: number;
			public static META_SCROLL_LOCK_ON: number;
			public static META_SHIFT_LEFT_ON: number;
			public static META_SHIFT_MASK: number;
			public static META_SHIFT_ON: number;
			public static META_SHIFT_RIGHT_ON: number;
			public static META_SYM_ON: number;
		}
		export module KeyEvent {
			export class Callback {
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			}
			export class DispatcherState {
				public constructor();
				public reset(): void;
				public reset(param0: java.lang.Object): void;
				public startTracking(param0: android.view.KeyEvent, param1: java.lang.Object): void;
				public isTracking(param0: android.view.KeyEvent): boolean;
				public performedLongPress(param0: android.view.KeyEvent): void;
				public handleUpEvent(param0: android.view.KeyEvent): void;
			}
		}
	}
}