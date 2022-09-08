import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import {
  useGetActorsQuery,
  useGetMovieByActorIdQuery,
} from '../../services/TMDB';
import useStyles from './styles';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

const Actors = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorsQuery(id);
  const { data: movies } = useGetMovieByActorIdQuery({ id, page });
  const navigate = useNavigate();
  const classes = useStyles();

  console.log(movies);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" align="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          styles={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data.biography || 'Sorry, no information yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            >
              Go back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={data.total_pages}
        />
      </Box>
    </>
  );
};

export default Actors;
