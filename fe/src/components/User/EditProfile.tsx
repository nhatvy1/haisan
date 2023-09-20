const EditProfile = () => {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <h2 className="text-xl">Hồ sơ của tôi</h2>
                <h3 className="text-sm">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                </h3>
            </div>
            <hr />
            <div className="flex items-center justify-between">
                <div>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-right pb-3">
                                        Tên đăng nhập
                                    </td>
                                    <td className="pl-5 pb-3">
                                        nhatvy
                                        <span className="ml-2 text-sm underline text-blue-600 cursor-pointer">Thay đổi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right pb-3">Tên </td>
                                    <td className="pl-5 pb-3">
                                        <input
                                            type="text"
                                            className="p-2 border w-[300px] rounded-md"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right pb-3">Email </td>
                                    <td className="pl-5 pb-3">
                                        <span>vy******@gmail.com</span>
                                        <span className="ml-2 text-sm underline text-blue-600 cursor-pointer">Thay đổi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right pb-3">Số điện thoại </td>
                                    <td className="pl-5 pb-3">
                                        <span>********24</span>
                                        <span className="ml-2 text-sm underline text-blue-600 cursor-pointer">Thay đổi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <button className="px-5 py-2 rounded-lg bg-beach text-white">Lưu</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div>Anh</div>
            </div>
        </div>
    );
};

export default EditProfile;
