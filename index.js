class Cliente{
	nome;
	cpf;
}

class ContaCorrente{
	agencia;
	saldo;

	sacar(valor){
		if (this.saldo >= valor)
			this.saldo -= valor;
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
contaCorrenteDoJonatan.saldo = 350.0;

contaCorrenteDoJonatan.sacar(250.0);
contaCorrenteDoJonatan.sacar(250.0);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteDoJonatan);
