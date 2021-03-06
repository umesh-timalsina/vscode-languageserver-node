/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { _, Features, _Connection } from './server';
import type { WorkDoneProgressReporter, WorkDoneProgressServerReporter, ResultProgressReporter } from './progress';
import * as st from './semanticTokens.proposed';

export * from 'vscode-languageserver-protocol/';
export { WorkDoneProgressReporter, WorkDoneProgressServerReporter, ResultProgressReporter };
export * from './server';


export namespace ProposedFeatures {
	export const all: Features<_, _, _, _, _, _, st.SemanticTokens> = {
		__brand: 'features',
		languages: st.SemanticTokensFeature
	};

	export type Connection = _Connection<_, _, _, _, _, _, st.SemanticTokens>;
	export type SemanticTokensBuilder = st.SemanticTokensBuilder;
	export const SemanticTokensBuilder = st.SemanticTokensBuilder;
}