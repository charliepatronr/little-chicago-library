class CreateBookLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :book_logs do |t|
      t.references :book, null: false, foreign_key: true
      t.references :library, null: false, foreign_key: true
      t.boolean :available
      t.boolean :adopted

      t.timestamps
    end
  end
end
