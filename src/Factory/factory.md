### Factory Pattern

# 1. Factory Pattern:

    - Giống như 1 nhà máy tập hợp các dịch vụ có liên quan đến nhau
        + FactoryLogistics: Car, Truck, Ship ...
        + FactoryEcommerce: Clothing, Electronic, Furniture ....
    - Trả về 1 dich vụ phù hợp với yêu cầu của người dùng
        + FactoryLogistics: yêu cầu -> chở 2 người đến địa điểm A -> dịch vụ phù hợp là : Car
        + FactoryEcommerce: yêu cầu -> tạo mới 1 sản phẩm là áo thun adidas -> dịch vụ phù hợp là: Clothing
    ==> yêu cầu  ==> FACTORY PATTERN ==> dịch vụ phù hợp

# 2. Khi nào nên sử dụng

    - Khi chúng ta muốn khởi tạo đối tượng (dịch vụ) phù hợp trong lúc chương trình đang chạy (động) mà chưa biêt nó sẽ trả về đối tượng gì
        + Ví dụ:
            > đối với Ecommerce. Khi người dùng tạo 1 sản phẩm không thể biết trước được người dùng sẽ tạo sản phẩm loại gì để code trước được
            > mà phải dựa vào tham số đầu vào mà người dùng nhập vào
            > Ví dụ
            > (type = 'Clothing') thì sẽ dùng ClothingService để thao tác.
            > (type = 'Electronic') thì dùng Electronic để thao tác.
            > ==> Trong code phải dùng switch-case để check được cái type mà sử dụng dịch vụ cho phù hợp
            > ==> mở rộng code (thêm 1 dịch vụ nữa) sẽ phải vào code logic sửa ==> vi phạm quy tắc SOLID
            > ==> `Factory Pattern` giúp chúng ta implement thêm mà không ảnh hưởng code trước đó
    - Khi các đối tượng tạo ra có chung đặc điểm của lớp cha
    - Che dấu đối tượng được tạo ra. Client chỉ dùng nhưng không quan tâm các đối tượng con sẽ tạo ra như thế nào
