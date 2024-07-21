import { memo } from 'react';
import Paragrap from './Paragraph';

function Content() {
    return (
        <div>
            <Paragrap />
        </div>
    );
}

export default memo(Content);
