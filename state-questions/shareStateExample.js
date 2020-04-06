const App = () => {
    state = {selecedVideo: 123};

    return (
        <App>
            <Searchbar/>
            <SelectedVideo video={this.state.selectedVideo}/>
            <VideoOptions video={this.state.selectedVideo}/>
        </App>
    )
};

// After adding userState()

const App = () => {
    cosnt [video, setVideo] = useState(null);

    return (
        <App>
            <Searchbar/>
            <SelectedVideo video={video}/>
            <VideoOptions video={video} setVideo/>
        </App>
    )
};


<img src="https://monosnap.com/image/Kkcee6QqclkhIE5DHYJWMTjf2NQpfY"/>;
