
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HIghlightCode';

const serializers = {
    types:{
        code: (props) => (
            <HighlightCode language={props.node.language}>
                {props.node.code}
                <div className="code-filename">{props.node.filename}</div>
            </HighlightCode>
        )
    }
}


const BlogContent = ({content}) =>{
    return(
        <BlockContent
            serializers={serializers}
            blocks={content}
            />
    )
}


export default BlogContent;