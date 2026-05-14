package Study.Assistant.demo.repository;

import Study.Assistant.demo.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {

}