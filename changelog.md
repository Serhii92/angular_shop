1. Создал:
 AppModule, 
    - CartModule, 
    - ProductsModule, 
    - SharedModule

2. Создал ProductListComponent, который делегирует отображение списка товаров
   компоненту ProductComponent. 
   getProducts() сервиса ProductService.
   модель Product. 
   Возможность добавления товара в корзину, если товар есть в наличии

3. CartListComponent

4. СartItemComponent

5. CartService

6. AppComponent элемент <h1 #appTitle></h1> с шаблонной переменной.

7. При наведении мышки или клике на пункт списка (CartItem) стилизировать его изменением фона. 
CartItemStyleDirective тут у меня небольшая проблема, использую HostBinding, HostListener, но не оно работает, не могу понять в чем причина
