import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Song from './song';

module.exports = React.createClass({
    render: function() {
        var songNodes = this.props.data.map(function(song) {
	    if(song.artist === "Adele"){
            return (
                <Song id={song.id} title={song.title} artist={song.artist} link={song.link} key={song.id}>
                    {song.lyrics}
                </Song>
            );
	    }
        });
//	songNodes.filter(
        return (
            <div className="songList">
                {songNodes}
            </div>
        );
    }
});
