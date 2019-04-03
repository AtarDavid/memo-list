import React, { Component } from 'react'
import "./MemoList.css"

export class MemoList extends Component {

    render() {
        return (
            <div>
                <h3>My plan for the day!</h3>
                <form>
                    <input type="text" id="listItem"></input>
                    <button>
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default MemoList
