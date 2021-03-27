class Cliente{
	nome;
	cpf;
}

class ContaCorrente{
	agencia;
	_saldo = 0.0;

	sacar(valor){
		if (this._saldo >= valor)
			this._saldo -= valor;
	}

	depositar(valor){
		if (valor > 0)
			this._saldo += valor;
	}
}

const cliente1 = new Cliente();
cliente1.nome = "Jonatan";
cliente1.cpf = 04034432233;

const cliente2 = new Cliente();
cliente2.nome = "Waldow";
cliente2.cpf = 04034434233;

const contaCorrenteDoJonatan = new ContaCorrente();
contaCorrenteDoJonatan.agencia = 1001;

contaCorrenteDoJonatan.depositar(350.0);
contaCorrenteDoJonatan.depositar(-350.0);
contaCorrenteDoJonatan.sacar(250.0);
contaCorrenteDoJonatan.sacar(250.0);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteDoJonatan);
