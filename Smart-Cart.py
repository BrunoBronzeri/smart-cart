from time import sleep

products = {}
id = 1

while True:
    product = input('Insira o nome do produto: ')
    price = float(input('Insira o preço do produto: R$'))
    products[id] = {'name': product, 'cost': price}
    print('n° de produtos inseridos até o momento: ', id)

    if len(products) == 10:
        print("O limite de 10 produtos foi atingido!")
        sleep(.7)
        break

    option = int(input("Deseja adicionar mais produtos? 1-Continuar Adicionando | 2-Finalizar Compra "))
    if option == 2:
        break

    id += 1

print('Finalizando compra...')
sleep(.75)
print('-'*30, '\nProdutos do carrinho:')
total = 0

for i in range(1, id+1):
    print(products[i]['name'], '-'*10, 'R${:.2f}'.format(products[i]['cost']))
    total += products[i]['cost']

print('Total:', '-'*10, 'R${:.2f}'.format(total))
print('-'*30)

notes = [100, 50, 20, 10, 5, 2, 1]
qnt = []

for note in notes:
    quantidade = int(total // note)
    total -= quantidade * note
    qnt.append(quantidade)

for i in range(len(notes)):
    if qnt[i] > 0:
        print("{} notas de R${:.2f}".format(qnt[i], notes[i]))
