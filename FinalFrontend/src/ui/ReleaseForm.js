import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate , _releaseAssi;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _releaseName.value, 
            date: _releaseDate.value,
            assi: _releaseAssi.value}
        );
        clearForm();
    }

    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
        _releaseAssi.value = '';
    }
    return (
    
    
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInput">Task Name</label>
            <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Task Name" />
            
             <label className="sr-only" htmlFor="inlineFormAssi">Release Name</label>
            <input type="text" ref={input => _releaseAssi = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Task Assigned to" />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Release Date</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input type="text" ref={input => _releaseDate = input} className="form-control" id="inlineFormInputGroup" placeholder="Due date" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default ReleaseForm;
