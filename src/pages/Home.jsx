import {Box, Container, Typography, Paper, Grid, Button, Select, MenuItem, Stack, Card} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from "react";

const ContentSection = styled(Paper)(({theme}) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));

function Home() {
    let [projects, setProjects] = useState([
        {
            name: "Project 1",
            tidbitCount: 1,
            wordCount: 100,
            lastModified: "2022-01-01",
        },
    ]);

    let [quickStatsRange, setQuickStatsRange] = useState(0);
    let [wordsWritten, setWordsWritten] = useState(0);
    let [charactersTyped, setCharactersTyped] = useState(0);
    let [wordsPerDay, setWordsPerDay] = useState(0);
    let [streak, setStreak] = useState(0);
    let [hideStreak, setHideStreak] = useState(true);

    return (
        <Box display={"flex"} flexDirection={"row"} width={"100%"} height={"100%"}>
            <Box display={"flex"} flexDirection={"column"} width={"75%"} height={"80%"} margin={"2.5%"}>
                <Box flex={"1 1 auto"} borderRadius={5} width={"100%"} sx={{backgroundColor: "gray", p: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <Card>
                                + Create Project
                            </Card>
                        </Grid>
                        {projects.map((project, index) => (
                            <Grid key={index} item xs={3}>
                            <Card>
                                    {project.name}
                                    <br/>
                                    {project.lastModified}
                                    <br/>
                                    {project.tidbitCount} Tidbit * {project.wordCount} Words
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box width={"20%"} height={"80%"} padding={"2.5%"}>
                <Box boxShadow={"3"}>
                    <Typography>Quick Stats</Typography>
                    <Select variant={"filled"} value={quickStatsRange}
                            onChange={e => setQuickStatsRange(e.target.value)}>
                        <MenuItem value={0}>Today</MenuItem>
                        <MenuItem value={1}>Yesterday</MenuItem>
                        <MenuItem value={2}>This Week</MenuItem>
                        <MenuItem value={3}>This Month</MenuItem>
                        <MenuItem value={4}>This Year</MenuItem>
                        <MenuItem value={5}>All Time</MenuItem>
                    </Select>
                    <Typography>{`Words written: ${wordsWritten}`}</Typography>
                    <Typography>{`Characters typed: ${charactersTyped}`}</Typography>
                    <Typography>{`Words per day: ${wordsPerDay}`}</Typography>
                    <Stack direction={"row"}>
                        <Button onClick={e => {
                            setHideStreak(!hideStreak)
                        }}>H</Button>
                        <Typography visibility={hideStreak ? "visible" : "hidden"}>{`Streak: ${streak}`}</Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
