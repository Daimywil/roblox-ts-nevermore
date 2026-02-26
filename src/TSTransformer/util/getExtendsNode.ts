import ts from "typescript";

export function getExtendsNode(node: ts.ClassLikeDeclaration) {
	for (const clause of node.heritageClauses ?? []) {
		if (clause.token === ts.SyntaxKind.ExtendsKeyword && clause.types[0].getText() !== "ServiceLike") {
			return clause.types[0];
		}
	}
}
