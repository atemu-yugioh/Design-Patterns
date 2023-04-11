### Observer Pattern - Mô Hình Mối Quan Hệ Một Và Nhiều

# 1. Observer pattern là gì?

> Observer là một mẫu thiết kế phần mềm mà một đối tượng, gọi là `subject`, duy trì một danh sách các thành phần phụ thuộc của nó
> gọi là `observer` và thông báo tơi chúng một cách tự động về bất cứ thay đổi nào

# 2. Thành phần chính

    - `Subject`: Chủ thể phát hành động, mốt `Subject` có 2 chức năng chính là `addObserver` (add những thành phần muốn quan sát vào 1 list) và `notify` (thông báo đến đến các thành phần trong list mỗi khi có sự kiện)
    - `Observer`: Các thành phần quan sát trạng thái của chủ thể để có các hành động hợp lý

# 3. Ví dụ

    - `Subject`: HotGirl
    - `Observer`: BoysATSM (boy  ảo tưởng sức mạnh)
    - `Event`: postStatusFaceBook()

> `Subject` (HotGirl) có một danh sách các `Obsever` (BoysATSM) theo dõi
> `Subject` (HotGirl) postStatusFaceBook('i'm tired!!!')
> Các `Observer` (BoysATSM) nhận được thông báo => thực hiện các hành động hỏi han, quan tâm các thứ ....

# 4. Kết luận

    - Định nghĩa mối phụ thuộc một - nhiều giữa các đối tượng để khi mà một đối tượng có sự thay đổi trạng thái, tất các thành phần phụ thuộc của nó sẽ được thông báo và cập nhật một cách tự động.
    - Một đối tượng có thể thông báo đến một số lượng không giới hạn các đối tượng khác.
