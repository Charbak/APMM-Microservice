package com.ibm.dndcalculation;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;


public interface DnDFeedRepo extends CrudRepository<DnDFeedEntity, UUID> {

}
