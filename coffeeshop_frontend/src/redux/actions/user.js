import { createAction } from ".";
import { userService } from "../../services";
import { FETCH_CREDENTIALS, nameOfLocalStore } from "../constants/type";
import Swal from 'sweetalert2'
export const login = user => {
    return dispatch => {
        userService
            .signIn(user)
            .then(result => {
                dispatch(createAction(FETCH_CREDENTIALS, result.data));
                localStorage.setItem(nameOfLocalStore.TaiKhoan, JSON.stringify(result.data))
                if (JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan))) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'ĐĂNG NHẬP THÀNH CÔNG',
                        showConfirmButton: false,
                        timer: 1400
                    })
                    return true,
                        setTimeout(() => {
                            window.history.back()
                        }, 1200)
                }
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG ĐÚNG',
                    showConfirmButton: false,
                    timer: 1200
                });
                return false
            })
    };
};