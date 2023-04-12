### Facade Pattern

# 1. Facade Pattern ?

    - Biến các quy trình phức tạp thành đơn giản
    - Gom các subsystem có liên quan logic với nhau thành 1 subfunction/subsystem ở cấp độ cao hơn => dễ dàng sử dụng
    - Ví dụ: phương thức thanh toán `payment` mỗi khi người dùng nhấn thanh toán
    - sẽ phải thực hiện tính toán các logics phía bên dưới để hoàn tất
    - trên thực tế các subfunction/subsystem khá phức tạp
    - patten này giống kiểu đóng gói 1 quy trình lại để dễ sử dụng

> Payment()
>
> - discount()
> - shipping()
> - fee()
