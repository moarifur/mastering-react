import React from 'react';

const ProjectInfo = () => {
    return (
        <table className="table table-bordered">
            <tr>
                <td
                    className="text-muted font-weight-bold"
                    colSpan={2}>Project 02 - Vidly App
                </td>
            </tr>
            <tr>
                <td className="text-success">Version</td>
                <td>
                    <a
                        className='text-info'
                        href="https://tinyurl.com/yjtunnu4"
                        target='_blank'
                    >
                        07
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-success">Diagram</td>
                <td>
                    <a
                        className='text-info'
                        href="https://tinyurl.com/3d8tmury"
                        target='_blank'
                    >
                        Link
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-success">Workflow</td>
                <td>
                    <a
                        className='text-info'
                        href="https://tinyurl.com/5n79j3as"
                        target='_blank'
                    >
                        Link
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-success">Code</td>
                <td>
                    <a
                        className='text-info'
                        href="https://tinyurl.com/yckcryz4"
                        target='_blank'
                    >
                        Link
                    </a>
                </td>
            </tr>
        </table>
    );
};

export default ProjectInfo;