export interface Owner {
  id: string,
  name: string
  document: string
  document_type: 'CPF' | 'CNPJ'
  creation_date?: Date
}
