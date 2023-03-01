import React from 'react'
import Container from 'react-bootstrap/Container'

function CmsVideos() {
  return (
    <section className='adm-videos'>
        <Container>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1 className='text-white mt-5'>Edit videos</h1>
                    <form className="row g-3  mb-5">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label text-white">Title</label>
                            <input type="text" className="form-control" id="title" name="title" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">year</label>
                            <input type="number" className="form-control" id="year" name="year" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Director</label>
                            <input type="text" className="form-control" name="director" id="director" placeholder="Director name" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" name='genre' placeholder="Genre, Comedy, TV Series, etc" />
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label text-white">Movie Duration</label>
                            <input type="text" className="form-control" id="movie_duration" name="movie_duration" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Rating</label>
                            <input type="number" className="form-control" id="rating" name="rating" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Image Path</label>
                            <input type="text" className="form-control" id="poster" name='poster' placeholder="Poster URL" />
                        </div>
                        <div className="col-12 text-start">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default CmsVideos
