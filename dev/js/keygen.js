function gerarSenha(tamanho) {
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '1234567890';
    const simbolos = '!@#$%^&*()_+{}[]|;:,.<>?';
    let senha = '';
    // Adiciona pelo menos um de cada tipo
    senha += caracteresMinusculos.charAt(Math.floor(Math.random() * caracteresMinusculos.length));
    senha += caracteresMaiusculos.charAt(Math.floor(Math.random() * caracteresMaiusculos.length));
    senha += numeros.charAt(Math.floor(Math.random() * numeros.length));
    senha += simbolos.charAt(Math.floor(Math.random() * simbolos.length));
    // Completa o restante da senha
    const caracteresRestantes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}[]|;:,.<>?';
    for (let i = 0; i < tamanho - 4; i++) {
        senha += caracteresRestantes.charAt(Math.floor(Math.random() * caracteresRestantes.length));
    }
    // Embaralha a senha
    senha = senha.split('').sort(function () { return 0.5 - Math.random(); }).join('');
    return senha;
}
document.getElementById('gerar').addEventListener('click', function () {
    const tamanho = parseInt(document.getElementById('tamanho').value);
    const senhaGerada = gerarSenha(tamanho);
    document.getElementById('senha').value = senhaGerada;
});
