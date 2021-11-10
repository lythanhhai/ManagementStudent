import React from 'react';

const SearchStudent = () => {
    return(
        <form className="mt-3" name="formSearchStudent" method="post" onSubmit={() => {}}>
            TÌm kiếm theo: <select name="chon">
                <option>ID</option>
                <option>Name</option>
                <option>ID</option>
                <option>ID</option>
            </select>
            <br />
            <br />
            Nội dung tìm kiếm: <input name="noidung"></input>
        </form>
    )
}

export default React.memo(SearchStudent);