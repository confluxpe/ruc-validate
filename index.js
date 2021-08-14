/**
 * verifyRUC
 * @description Función para obtener validez de string como RUC
 * @param {String} ruc - RUC a evaluar validez
 * @returns {Boolean}
 */
const verifyRUC = (ruc) => {
	if (ruc.length === 11) {
		const expression = new RegExp('^(10|15|16|17|20){1,2}[0-9]{3,9}$');
		const factors = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
		let total = 0;
		for (let i = 0; i < factors.length; i++) {
			const sum = ruc[i] * factors[i];
			total += sum;
		}
		const residue = total % 11;
		const verifier = 11 - residue;
		const evaluation = expression.test(ruc);
		const check = ruc % 10 === verifier % 10;
		return evaluation && check;
	}
	return false;
};

module.exports = verifyRUC;
