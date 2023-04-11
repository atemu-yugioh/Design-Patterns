## Strategy Pattern

# 1. Strategy Pattern dùng khi nào
    - Có 1 đoạn code dễ thay đổi => cần phải tách chúng ra khỏi chương trình để đễ dàng bảo trì
    - Tránh gặp rắc rối khi phải thực hiện một chức năng nào đó qua quá nhiều lớp con
    - Muốn thay đổi thuật toán, logic khi chạy chương trình

# 2. Các thành phần tham gia Strategy Pattern
    - `Strategy`: định nghĩa các hành vi (chiến lượt) có thể có của 1 Strategy
    - `ConcreteStrategy`: cài đặt các hành vi (chiến lượt) của thể của Strategy
    - `Context`: chứa tham chiếu đến đối tượng Strategy

# 3. Ví dụ
    - Bài toán: Xấy dựng 1 hàm trả về giá của sản phẩm tương ứng với các chiến lượt bán hàng của shopee
        + Giảm giá khi người dùng đặt hàng trước 1 sản phẩm: `preOrder` => 80%
        + Giảm giá khi rơi vào các ngày của tháng: `DayOfMonth` => 90%
        + Khuyến mãi thông thường
        + Giảm giá Black Friday: `BlackFriday` => 50%
        ....

> Ý tưởng level 0-1-2: Viết 1 hàm getPrice(originalPrice, typePromotion) => if(typePromotion) => return price * (promotion tương ứng)
> Nhược điểm: if liên tục, cứ có thêm 1 chiến lượt giảm giá lại phải chạy vào hàm getPrice if thêm 1 cái => chỉnh sửa logic của hàm getPrice > không tốt
> Giải Pháp: Dùng Strategy Pattern
>   - `Strategy`: tách mỗi chiến lượt khuyến mãi thành các function/class riêng
>   - `ConcreteStrategy`: định nghĩa logic cho mỗi chiến lượt
>   - `Context`: tham chiếu typePromotion <-> các chiến lượt vừa mới định nghĩa
> Ưu điểm:
    - Khi thêm 1 chiến lượt mới chỉ cần định nghĩa thêm 1 function/class => không làm ảnh hưởng đến logic của các chiến lượt khác
    - Khi chỉnh sửa logic của 1 chiến lươt thì vào function/class của chiến lượt đó mà sửa => không làm ảnh hưởng đến logic của các chiến lượt khác

    >> Đảm bảo được nguyên tắc: Open - Close của SOLID