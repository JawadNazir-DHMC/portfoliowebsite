import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"v2023-09-26",
  dataset:"production",
  projectId:"50oyqaat",
  useCdn:false,
})
