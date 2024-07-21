import { ThemeContext } from './Theme';
import { useContext } from 'react';
// themeContext lấy sẵn consumer rồi nên nhận lại value của provider cung cấp
function Paragrap() {
    const context = useContext(ThemeContext);
    return (
        <div className={context.theme}>
            <p> Chào mừng anh em đến với kênh chanel của mình nhé </p>
        </div>
    );
}
export default Paragrap;
