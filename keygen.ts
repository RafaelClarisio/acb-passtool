function gerarSenha(tamanho: number): string {
    const caracteresMinusculos: string = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresMaiusculos: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros: string = '1234567890';
    const simbolos: string = '!@#$%^&*()_+{}[]|;:,.<>?';
    let senha: string = '';

    // Adiciona pelo menos um de cada tipo
    senha += caracteresMinusculos.charAt(Math.floor(Math.random() * caracteresMinusculos.length));
    senha += caracteresMaiusculos.charAt(Math.floor(Math.random() * caracteresMaiusculos.length));
    senha += numeros.charAt(Math.floor(Math.random() * numeros.length));
    senha += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

    // Completa o restante da senha
    const caracteresRestantes: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}[]|;:,.<>?';
    for (let i: number = 0; i < tamanho - 4; i++) {
        senha += caracteresRestantes.charAt(Math.floor(Math.random() * caracteresRestantes.length));
    }

    // Embaralha a senha
    senha = senha.split('').sort(function(){return 0.5-Math.random()}).join('');

    return senha;
}

document.getElementById('gerar')!.addEventListener('click', function() {
    const tamanho: number = parseInt((document.getElementById('tamanho') as HTMLInputElement).value);
    const senhaGerada: string = gerarSenha(tamanho);
    (document.getElementById('senha') as HTMLInputElement).value = senhaGerada;
});
