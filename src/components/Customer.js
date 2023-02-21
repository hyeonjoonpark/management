import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell> {this.props.user_id} </TableCell>
                    <TableCell> {this.props.user_name} </TableCell>
                    <TableCell> {this.props.enter_year} </TableCell>
                    <TableCell> {this.props.gender} </TableCell>
                    <TableCell> {this.props.role} </TableCell>
                    <TableCell><button className="link"><a href={this.props.name}>자세히보기▽</a></button></TableCell>
                </TableRow>
            </div> 
        )
    }
}

export default Customer;